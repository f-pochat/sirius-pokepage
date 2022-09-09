import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import Container from "../../../common/container/Container";
import {useWindowSize} from "../../../../hooks";

const ImageCard = (props: any) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const size = useWindowSize();

    return (
        size.width > 773 ?
            <Container
                size={{width: '40%', height: '70vh'}}
                color='#de9400'
                alignment='left'
            >
                <ReactCardFlip
                    isFlipped={isFlipped}
                    flipDirection="horizontal"
                    containerClassName='image-container'

                >
                    <div className='image-container' onClick={() => setIsFlipped(!isFlipped)}>
                        <img className='slider-image' src={props.data?.frontImage} alt=""/>
                    </div>
                    <div className='image-container' onClick={() => setIsFlipped(!isFlipped)}>
                        <img className='slider-image' src={props.data?.backImage} alt=""/>
                    </div>
                </ReactCardFlip>
            </Container>
            :
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection="horizontal"
                containerClassName='image-container'

            >
                <div className='image-container' onClick={() => setIsFlipped(!isFlipped)}>
                    <img className='slider-image' src={props.data?.frontImage} alt=""/>
                </div>
                <div className='image-container' onClick={() => setIsFlipped(!isFlipped)}>
                    <img className='slider-image' src={props.data?.backImage} alt=""/>
                </div>
            </ReactCardFlip>
    );
};

export default ImageCard;