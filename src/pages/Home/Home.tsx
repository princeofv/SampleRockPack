import React from "react";
import "./home.scss";
export default function ProductList(Props: any) {
  const list = [
    {
      image: "https://imgur.com/aDSlbHj.jpg",
      design: "Design",
      name: "Modern Art and Design",
      lession: "10 lessions",
      span: "|",
      workshop: "3 Workshops",
    },
    {
      image: "https://imgur.com/Dhtkntl.jpg",
      design: "Skills",
      name: "Presentation",
      lession: "19 lessions",
      span: "|",
      workshop: "11 Workshops",
    },
    {
      image: "https://imgur.com/VX3Pyc4.jpg",
      design: "Technology",
      name: "Artificial Intelligence",
      lession: "29 lessions",
      span: "|",
      workshop: "17 Workshops",
    },
    {
      image: "https://imgur.com/LvpJ2qU.jpg",
      design: "Buisness",
      name: "Presentation",
      lession: "29 lessions",
      span: "|",
      workshop: "21 Workshops",
    },
    {
      image: "https://imgur.com/GPHwiEz.jpg",
      design: "Technology",
      name: "Green Buisness",
      lession: "9 lessions",
      span: "|",
      workshop: "13 Workshops",
    },
    {
      image: "https://imgur.com/s0pQanZ.jpg",
      design: "Skills",
      name: "Presentation",
      lession: "14 lessions",
      span: "|",
      workshop: "7 Workshops",
    },
  ];

  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="robert">
              <span>
                <img src="https://imgur.com/F0varm7.png" />
              </span>
              <div className="user_name">
                <h4>Robert Fox</h4>
                <p>Coursebook</p>
              </div>
            </div>
            <hr />
            <div className="learning">
              <div className="l_content">
                <i className="fa fa-angle-right"></i>
                <h4>Learning content</h4>
              </div>
              <p>Products</p>
              <p>Certificates</p>
              <p>Course Studios</p>
              <p>LIVE Class</p>
            </div>
            <div className="l_content l_text">
              <i className="fa fa-angle-right"></i>
              <h4>Website</h4>
            </div>
            <div className="l_content l_text">
              <i className="fa fa-angle-right"></i>
              <h4>Marketing</h4>
            </div>
            <div className="l_content l_text">
              <i className="fa fa-angle-right"></i>
              <h4>Analytics</h4>
            </div>
            <div className="l_content l_text">
              <i className="fa fa-angle-right"></i>
              <h4>People</h4>
            </div>
            <div className="left_box">
              <span>
                <img src="https://imgur.com/ISq2dzj.jpg" />
              </span>
              <h4>Upgrade Now</h4>
              <h5>Create more courses</h5>
            </div>
          </div>
          <div className="right-side">
            <div className="pro_sea">
              <h2>Products</h2>
              <div className="search">
                <input type="text" placeholder="Search" />
                <i className="fa fa-search"></i>
                <i className="fa fa-bell-o"></i>
              </div>
            </div>
            <div className="create_pro">
              <div className="features">
                <div className="window">
                  <span>
                    <i className="fa fa-windows"></i>
                  </span>
                  <span>
                    <i className="fa fa-bars"></i>
                  </span>
                </div>
                <div className="sort">
                  <select>
                    <option>Sort by : None</option>
                    <option>Sort by : Name</option>
                    <option>Sort by : Size</option>
                    <option>Sort by : Details</option>
                  </select>
                </div>
                <div className="sort">
                  <select>
                    <option>Type : None</option>
                    <option>Type : .jpg</option>
                    <option>Type : .png</option>
                    <option>Type : .jpeg</option>
                  </select>
                </div>
              </div>
              <button>Create Product</button>
            </div>
            <p>Published 20 courses</p>

            <ul className="pic_img">
              {list.map((content) => (
                <li>
                  <img src={content.image} />
                  <div className="img_content">
                    <h5>{content.design}</h5>
                    <h3>{content.name}</h3>
                    <div className="lessions">
                      <h4>{content.lession}</h4>
                      <span>{content.span}</span>
                      <h4>{content.workshop}</h4>
                    </div>
                    <div className="star">
                      <i className="fa fa-star-o"></i>
                      <p>Save</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
