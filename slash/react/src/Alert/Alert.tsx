import { MouseEventHandler, PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";
import "@axa-fr/design-system-slash-css/dist/Alert/Alert.scss";

export enum TypeIcons {
  error = "glyphicon glyphicon-minus-sign",
  danger = "glyphicon glyphicon-alert",
  info = "glyphicon glyphicon-info-sign",
  success = "glyphicon glyphicon-ok",
}

export type AlertCoreComponentProps = {
  title: string;
  icon?: string;
  onClose?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  classModifier?: "error" | "danger" | "info" | "success";
  closeButtonAriaLabel?: string;
};

export const Alert = ({
  className,
  onClose,
  icon,
  title,
  children,
  classModifier = "error",
  closeButtonAriaLabel = "close",
}: PropsWithChildren<AlertCoreComponentProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-alert",
  );

  return (
    <div className={componentClassName} role="alert">
      <div className="af-alert__title">
        <div className="af-alert__title-icon">
          <i
            role="presentation"
            className={
              icon || TypeIcons[classModifier as keyof typeof TypeIcons]
            }
          />
        </div>
        <div className="af-alert__title-text">{title}</div>
        {onClose && (
          <button
            type="button"
            className="af-alert__title-icon-close"
            onClick={onClose}
            aria-label={closeButtonAriaLabel}
          >
            <i className="glyphicon glyphicon-close" />
          </button>
        )}
      </div>
      {children && (
        <div className="af-alert__content">
          <div className="af-alert__content-left" />
          <div className="af-alert__content-right">{children}</div>
        </div>
      )}
    </div>
  );
};
