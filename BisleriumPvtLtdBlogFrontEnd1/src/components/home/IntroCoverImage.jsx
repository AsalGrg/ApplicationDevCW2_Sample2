import React from "react";

const IntroCoverImage = () => {
  return (
    <div
      style={{
        height: "380px",
      }}
      className="bg-info"
    >
      <div className="w-100 row justify-content-between px-4 h-100">
        <div className="col-5 d-flex flex-column justify-content-center align-items-start gap-2">
          <p className="display-6 fw-bolder text-light">
            Discover Bislerium Blogs
          </p>
          <p className="lead fw-bold text-dark">Curosity lies here.</p>
        </div>

        <div className="col-5">
          <img
            src="https://i0.wp.com/successismoney.com/wp-content/uploads/2020/06/personal-financial-blogs-.jpg?fit=768%2C542&ssl=1"
            className="w-100 h-100"
            style={{
                objectFit: 'contain',

            }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroCoverImage;
