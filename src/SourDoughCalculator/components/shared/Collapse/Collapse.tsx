import {
  FC,
  PropsWithChildren,
  useCallback,
  useState,
  MouseEvent,
} from "react";
import clsx from "clsx";

interface CollapseProps extends PropsWithChildren {
  title: string;
}

export const Collapse: FC<CollapseProps> = ({ title, children }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      setOpened(!opened);
    },
    [setOpened, opened],
  );

  return (
    <div className="mt-6">
      <button
        className="btn btn-dash w-full cursor-pointer text-left"
        onClick={handleClick}
      >
        {title}
      </button>
      <div
        className={clsx("overflow-hidden", opened ? "max-h-300px" : "max-h-0")}
      >
        {children}
      </div>
    </div>
  );
};
