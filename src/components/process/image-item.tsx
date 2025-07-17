import React from 'react';

type ImageItemProps = {
    heading: string;
    source: string;
    dataLag: string;
}

export const ImageItem: React.FC<ImageItemProps> = ({heading, source, dataLag}) => {
    return (
        <div className="img" data-lag={dataLag}>
            <img
                src={source}
                alt=""
                className="img-cover"
            />
            <span className="txt sub-font"> {heading} </span>
        </div>
    );
}