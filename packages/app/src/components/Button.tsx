import type { ParentComponent } from 'solid-js';

interface Props {
  ref?: HTMLButtonElement;
  class?: string;
  role?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

const Button: ParentComponent<Props> = (props) => (
  <button ref={props.ref} class={[
    props.class,
    'px-6 py-2 flex justify-center items-center border transition rounded-lg hover:cursor-pointer',
    props.role === "primary" &&
    (!props.disabled
      ? 'bg-cloud-2 border-cloud-3 text-white hover:brightness-110'
      : 'bg-cloud-0 border-cloud-1 text-mono-7 cursor-not-allowed'),
    props.role === "danger" &&
    (!props.disabled
      ? 'bg-scarlet-2 border-scarlet-3 text-white hover:brightness-110'
      : 'bg-scarlet-1 border-scarlet-2 text-scarlet-4 cursor-not-allowed'),
    props.role !== "primary" &&
    (!props.disabled
      ? 'bg-mono-2 border-mono-3 text-white hover:brightness-110'
      : 'bg-mono-2 border-mono-3 text-mono-3 cursor-not-allowed')
  ].filter(Boolean).join(" ")}>{props.children}</button>
);

export default Button;
