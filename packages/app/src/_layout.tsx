import type { ParentComponent } from 'solid-js';

const RootLayout: ParentComponent = (props) => {
  return (
    <>
      <header>header</header>
      {props.children}
    </>
  );
};

export default RootLayout;
