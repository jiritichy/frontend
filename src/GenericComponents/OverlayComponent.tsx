import "../CSS/Overlay.css";

/** Renders an overlay on the screen with the children inside. */
const OverlayComponent = (props: any) => {
  return (
    <div
      className="form-group mt-4 container-fluid d-flex justify-content-center align-items-center"
      id="overlay"
      style={{ cursor: "auto" }}
    >
      <div
        className="d-flex flex-column bg-secondary justify-content-center w-75 px-5 py-5"
        style={{ minWidth: "350px", maxWidth: "750px" }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default OverlayComponent;
