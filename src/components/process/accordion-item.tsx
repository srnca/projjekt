import React from 'react';

export type AccordionItemRenderProps = {
    num: number;
    heading: string;
    content: string;
    opened?: boolean;
}

export const AccordionItem: React.FC<AccordionItemRenderProps> = ({num, heading, content, opened}) => {
    const id: string = `collapse${num}`;
    const target = `#${id}`;

    return (
        <div className="accordion-item">
            <div className="accordion-header">
                <button
                    className={`accordion-button${opened ? "" : " collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={target}
                >
                    <span className="num"> {num} / </span> <h3> {heading} </h3>
                </button>
            </div>
            <div
                id={id}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionProcess"
            >
                <div className="accordion-body">
                    <div className="text">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}