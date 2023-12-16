import OfferIcon from "../icons/OfferIcon"
import styles from "./buttons.module.css"
export default function OfferButton({ fill, porcentage }) {
    const { offerButton } = styles
    return (
        <button className={offerButton}>
            <OfferIcon fill={fill} porcentage={porcentage} />
        </button>
    )
}