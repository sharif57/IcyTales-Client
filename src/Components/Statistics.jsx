import { useState, useEffect, useRef } from "react";

const Statistics = () => {
    const items = [
        {
            num: '91+',
            title: 'Awards Win'
        },
        {
            num: '49%',
            title: 'Satisfied Clients'
        },
        {
            num: '20+',
            title: 'Years of Experience'
        },
        {
            num: '100+',
            title: 'Employees Working'
        },
    ];

    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    // Intersection Observer callback
    const handleObserver = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current.unobserve(entry.target); // Stop observing after the animation starts
        }
    };

    // Use effect to observe the section
    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    // Function to animate the number increase
    const animateNumber = (target) => {
        const [num, percentage] = target.split('+');
        let number = parseInt(num.replace('%', ''), 10);
        if (isNaN(number)) number = 0;

        let start = 0;
        const end = number;
        const duration = 2000; // Duration in ms
        const stepTime = Math.abs(Math.floor(duration / end));

        const interval = setInterval(() => {
            start += 1;
            if (start <= end) {
                document.getElementById(`stat-${target}`).innerText = start + (percentage ? '%' : '');
            } else {
                clearInterval(interval);
            }
        }, stepTime);
    };

    return (
        <div className="mt-16">
            <div className="text-center space-y-3">
                <h1 className="text-5xl font-bold">Our <span className="text-pink-500">Statistics</span></h1>
                <p>What makes us special through our impressive statistics.</p>
            </div>

            <div ref={observerRef} className="grid grid-cols-1 lg:grid-cols-4 w-5/6 mx-auto mt-16 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="p-6 border-b-4 border-pink-600 shadow-lg rounded-lg text-center rounded-l-2xl"
                    >
                        <h1
                            id={`stat-${item.num}`}
                            className="text-6xl font-bold"
                        >
                            {isVisible ? item.num : '0'}
                        </h1>
                        <p>{item.title}</p>
                        {isVisible && animateNumber(item.num)} {/* Trigger the animation when visible */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
