import ZigZagBlock from "../../../custom/ZigZagBlock";
import { enterpriseFeatures } from "../../../utils/dummy";

export default function Features() {
    return (
        <ZigZagBlock
            title={"Enterprise Training & Development"}
            data={enterpriseFeatures}
        />
    );
}
