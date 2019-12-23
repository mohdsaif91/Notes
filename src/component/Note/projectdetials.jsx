import React from "react";
const projectdetials = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-detials">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="cart-title">Project-{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            quibusdam deleniti est consequuntur ipsa molestias, voluptatem alias
            doloremque ipsam dolore natus inventore sint illo id culpa sunt eius
            laborum nostrum.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By the Cosine</div>
          <div>2nd september,2am </div>
        </div>
      </div>
    </div>
  );
};

export default projectdetials;
