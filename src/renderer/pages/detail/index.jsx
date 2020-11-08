import React from 'react';
import PropTypes from 'prop-types';

function DetailPage(props) {
  const { title } = props;
  console.log('DeailPage -> title', title);
  return (
    <div>
      detail page.
    </div>
  );
}

DetailPage.propTypes = {
  title: PropTypes.string,
};
DetailPage.defaultProps = {
  title: 'nice',
};

export default DetailPage;
