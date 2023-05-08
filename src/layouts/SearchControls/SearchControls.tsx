import {
  IconDefinition,
  faCircleInfo,
  faHeart,
  faHeartCrack,
  faRotateLeft,
  faTriangleExclamation,
} from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@/components/Button/Button";
import styles from "./SearchControls.module.scss";

const SearchControls = () => {
  return (
    <div>
      <SearchUIButton variant="undo" />
      <SearchUIButton variant="dislike" />
      <SearchUIButton variant="like" />
      <SearchUIButton variant="info" />
    </div>
  );
};

export default SearchControls;

/* -------------------------------------------------------------------------- */
/*                         Search UI button component                         */
/* -------------------------------------------------------------------------- */

export const SearchUIButton = ({ variant }: SearchUIButtonProps) => {
  /* -------------------------------- Variants -------------------------------- */

  let faIcon: IconDefinition = faTriangleExclamation;
  let description: string = "";

  switch (variant) {
    case "like":
      faIcon = faHeart;
      description = "Like";
      break;
    case "dislike":
      faIcon = faHeartCrack;
      description = "Dislike";
      break;
    case "info":
      faIcon = faCircleInfo;
      description = "More info";
      break;
    case "undo":
      faIcon = faRotateLeft;
      description = "Undo";
      break;
    default:
      break;
  }

  return (
    <Button className={styles.button}>
      <FontAwesomeIcon icon={faIcon} />
      <span>{description}</span>
    </Button>
  );
};

type SearchUIButtonProps = {
  variant: "like" | "dislike" | "info" | "undo";
};
