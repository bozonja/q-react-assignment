import { useEffect } from "react";
import PropTypes from "prop-types";

//components
import PageTitle from "components/PageTitle/PageTitle";

const CreatePost = ({ helloMessage }) => {
  useEffect(() => {
    console.log(`${helloMessage} Create post`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageTitle title="Create post" helloMessage={helloMessage} />
      Here goes create post content
    </>
  );
};

export default CreatePost;

CreatePost.propTypes = {
  helloMessage: PropTypes.string.isRequired,
};
