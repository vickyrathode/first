import React from 'react';

export default function About(props) {
    

    return (
        <div className='container'>
            <div className={`accordion accordion-flush bg-${props.mode}`} id="accordionFlushExample"   >
                <div className={`accordion-item bg-${props.mode}`} style={{ color: props.mode === "light" ? "black" : "Orange" }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${props.mode}`}
                            style={{ color: props.mode === "light" ? "Blue" : "Violet" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                        >
                            Transform Text with Ease!
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Unleash the power of text transformation! Our platform provides you with intuitive tools to convert text effortlessly. Whether it's case conversion, removing extra spaces, or reversing text, we've got you covered.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style={{ color: props.mode === "light" ? "black" : "Orange" }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${props.mode}`}
                            style={{ color: props.mode === "light" ? "Blue" : "Violet" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                        >
                            Your Text, Your Way!
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Craft your text just the way you want it. Our converter tools offer flexibility and precision, ensuring that your text is tailored to your preferences. Experience the joy of personalized text conversion!
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style={{ color: props.mode === "light" ? "black" : "Orange" }}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${props.mode}`}
                            style={{ color: props.mode === "light" ? "Blue" : "Violet" }}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                        >
                            Fast and Simple Text Transformation!
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                    >
                        <div className="accordion-body">
                            Save time and effort with our text conversion tools. With a user-friendly interface and speedy performance, transforming your text has never been easier. Dive into a world of quick and efficient text conversion!
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-5 mb-3 text-center">
                <p style={{ color: props.mode === "light" ? "black" : "white" }}>&copy; 2024 Text Converter App. All rights reserved. | <a href="https://example.com/download" target="_blank" rel="noopener noreferrer">Download Now</a></p>
            </footer>
        </div>
    );
}
