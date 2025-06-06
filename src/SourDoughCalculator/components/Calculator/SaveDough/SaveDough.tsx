import SaveIcon from "~/assets/save.svg?react";

interface SaveDoughProps {
  enabled: boolean;
  onClick?: () => void;
}

export const SaveDough = ({ enabled, onClick }: SaveDoughProps) => (
  <button
    onClick={onClick}
    disabled={!enabled}
    className="btn btn-outline mt-6 w-full px-6"
  >
    <SaveIcon />
    Save amounts
  </button>
);
