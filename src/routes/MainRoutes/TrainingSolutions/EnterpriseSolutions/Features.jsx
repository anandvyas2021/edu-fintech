import { enterpriseFeatures } from "../../../../utils/dummy";
import ZigZagBlock from "../../../../custom/ZigZagBlock";

export default function EnterpriseFeatures() {
    return (
        <ZigZagBlock
            title={"Enterprise Training & Development"}
            data={enterpriseFeatures}
        />
    );
}
