import IsOfferIcon from "../icons/IsOfferIcon"
import styles from "./buttons.module.css"
export default function OfferButton({ fill, porcentage }) {
    const { offerButton } = styles
    return (
        <button className={offerButton}>
            <IsOfferIcon fill={fill} porcentage={porcentage} />
        </button>
    )
}