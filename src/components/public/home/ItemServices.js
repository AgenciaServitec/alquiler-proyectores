import styled from "styled-components";

export const ItemServices = ({ img, title, contents,precio }) => {
  return (
    <Container>
      <div className="content-card">
          <img src={img} alt={title} />
      </div>
        <div className="content-text">
            <p className="title">{title}</p>
            <h2>{precio}</h2>
            <ul>
            {
                contents.map((content, index)=>(
                    <li key={index}>{content}</li>
                ))
            }
        </ul>
        </div>
    </Container>
  );
};

const Container = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  width: 25rem;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  //padding: 1rem 0.5rem;
  .content-card{
    display: flex;
    border-radius: 5px;
    img {
      width:100%;
      border-radius: 10px;
      height: 12rem;
    }
   
  }
.content-text{
  padding: 1rem 0.5rem 1.5rem 0.5rem;
  h2{
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }
  .title{
    font-size: 1.5rem;
    font-weight: 900;
    padding-bottom: 0;
    margin-bottom: 0;
    align-self: center;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 700;
    text-align: center;
    color: white;
    font-family: 'Intro Demo', sans-serif;
  }
  p {
    padding: 0 0.5rem;
    font-size: 0.8rem;
    text-align: center;
    color: #abb6c2;
    font-family: 'Intro Demo', sans-serif;
  }
  ul{
    list-style: none;
    padding: 1rem;
    li{
      padding-bottom: 1rem;
    }
  }
}
`;
