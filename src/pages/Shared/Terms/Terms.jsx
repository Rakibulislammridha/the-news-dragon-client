import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2>Our Terms And Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quia
        doloremque ea minus, voluptate blanditiis quis eum libero reprehenderit
        est sapiente consectetur a, ducimus animi, delectus eos. Quis
        dignissimos temporibus officiis necessitatibus aperiam voluptatum eaque
        itaque eos tempora? Corrupti sit cum dolorum perspiciatis ullam atque,
        inventore quia, magnam repellendus fuga ipsum! Facilis assumenda autem
        numquam corrupti commodi debitis, veniam ea similique iste nesciunt
        dignissimos exercitationem beatae temporibus vel maiores impedit
        consequuntur possimus non nisi aspernatur quisquam ex, accusantium,
        illum neque. Excepturi asperiores dolor illo, eveniet, doloribus,
        voluptatibus veniam inventore maiores nihil eaque amet alias. Nobis ea
        sed et harum sapiente.
      </p>
      <p>
        Go Back To <Link to="/register">Registration</Link>
      </p>
    </Container>
  );
};

export default Terms;
