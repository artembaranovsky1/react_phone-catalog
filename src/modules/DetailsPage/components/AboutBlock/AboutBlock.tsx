import React from 'react';

export const AboutBlock = ({ selectedProduct }) => {
  const description = selectedProduct?.description;

  return (
    <>
      <div className="info-details__about">
        <p className="text-h3 about-title">About</p>
        <div className="details-info__configurate-line"></div>

        <div className="full-description">
          {description?.map(desc => (
            <div className="about-text" key={desc.title}>
              <p className="text-h4">{desc.title}</p>
              <p className="text-body secondary">{desc.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutBlock;
