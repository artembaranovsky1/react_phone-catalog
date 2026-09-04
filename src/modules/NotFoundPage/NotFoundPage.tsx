import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="content not-found-page__content">
      <div className="text-h3">Page not found</div>
      <img
        src="/public/img/page-not-found.png"
        alt=""
        className="not-found-page__photo"
      />
    </div>
  );
};

export default NotFoundPage;
