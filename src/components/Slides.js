import React, {useState} from 'react';

function Slides({slides}) {

    const [currentSliderIndex, setSliderIndex] = useState(0)
    const [isResetDisabled, setResetDisabled] = useState(true)
    const [isPrevDisabled, setPrevDisabled] = useState(true)
    const [isNextDisabled, setNextDisabled] = useState(false)

    const onNextClickHandler = () => {
        // On Click of next button fetch current index and length of total slides
        const currentIndex = currentSliderIndex
        const totalSlides = slides.length;

        // Increment the current slider index if current index is less than total length of slides
        if (currentIndex < totalSlides-1) {
            setSliderIndex(currentIndex + 1)
            setResetDisabled(false);
            setPrevDisabled(false);
        }

        if (currentIndex === totalSlides-1) {
            setNextDisabled(true);
        }
    }

    const onPrevClickHandler = () => {
        // On Click of prev button fetch current index and length of total slides
        const currentIndex = currentSliderIndex
        const totalSlides = slides.length;

        // Increment the current slider index if current index is less than total length of slides
        if (currentIndex < totalSlides && currentIndex > 0) {
            setSliderIndex(currentIndex - 1)
            setResetDisabled(false);
            setNextDisabled(false);
        }

        if (currentIndex === 1) {
            setPrevDisabled(true);
            setResetDisabled(true);
        }
    }

    const onResetClickHandler = () => {
        setSliderIndex(0)
        setResetDisabled(true);
        setPrevDisabled(true);
        setNextDisabled(false);

    }



    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" onClick={onResetClickHandler} className="small outlined" disabled={isResetDisabled}>Restart</button>
                <button data-testid="button-prev" onClick={onPrevClickHandler} className="small" disabled={isPrevDisabled}>Prev</button>
                <button data-testid="button-next" onClick={onNextClickHandler} className="small" disabled={isNextDisabled}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentSliderIndex]?.title}</h1>
                <p data-testid="text">{slides[currentSliderIndex]?.text}</p>
            </div>
        </div>
    );

}

export default Slides;
