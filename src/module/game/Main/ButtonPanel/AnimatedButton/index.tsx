import React from "react";
import "./index.less";

export interface Props {
    size: number;
    onClick?: () => void;
    glow?: boolean;
    disabled?: boolean;
}

export const AnimatedButton = React.memo(({ size, glow = false, disabled = false, onClick: onBtnClick }: Props) => {
    const [pressed, setPressed] = React.useState(false);

    const onTransitionEnd = () => {
        setPressed(false);
    };

    const onClick = () => {
        setPressed(true);
        onBtnClick?.();
    };

    const style: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
    };

    React.useEffect(() => {
        if (glow) {
            setPressed(true);
        }
    }, [glow]);

    return (
        <button
            type="button"
            onClick={onClick}
            onTransitionEnd={onTransitionEnd}
            style={style}
            className={`animated-button ${pressed ? "pressed" : ""}`}
            disabled={disabled}
        />
    );
});
