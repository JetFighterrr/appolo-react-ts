import React from "react";

interface PictureProps {
    pictureFileName?: string;
}

// @ts-ignore
const Picture: React.FC<PictureProps> = ({pictureFileName}) => {
    if(!pictureFileName) {
        return (
            <h3 className='picture'>Select options and click get data to see some Keanu</h3>
        );
    }

    const image: string = String(`http://localhost:5000/${pictureFileName}`);

    return (
        <div className='picture'>
                <img
                    src={image}
                    alt={`Image of Keanu Reeves ${pictureFileName}`}
                />
        </div>
    );
}

export {Picture};