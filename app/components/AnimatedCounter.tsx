import { useReducer, useEffect, useRef, useCallback } from 'react';

type CounterState = { count: number };
type CounterAction = { type: 'SET_COUNT'; payload: number };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
    switch (action.type) {
        case 'SET_COUNT':
            return { count: action.payload };
        default:
            return state;
    }
}

export default function AnimatedCounter({ end, duration = 2000 }: { end: number, duration?: number }) {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    const animationFrameId = useRef<number>();
    const startTimeRef = useRef<number>();
    const elementRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    // Memoized animation function
    const animate = useCallback((timestamp: number) => {
        if (!startTimeRef.current) {
            startTimeRef.current = timestamp;
        }

        const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
        const nextCount = Math.floor(end * progress);

        dispatch({ type: 'SET_COUNT', payload: nextCount });

        if (progress < 1) {
            animationFrameId.current = requestAnimationFrame(animate);
        }
    }, [end, duration]);

    useEffect(() => {
        // Only set up the observer if we haven't animated yet
        if (hasAnimated.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animationFrameId.current = requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [animate]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return (
        <span ref={elementRef} className="tabular-nums">
            {state.count}
        </span>
    );
}