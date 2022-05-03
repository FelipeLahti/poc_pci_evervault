import {useEvervault, EvervaultProvider} from '@evervault/react';
import {useEffect} from "react";

export const Last4DigitsInput = () => {
    const evervault = useEvervault();
    useEffect(() => {
        if(evervault) {
            evervault.inputs("form-cc")
        }
    }, [evervault])

    return <div id={"form-cc"}></div>
};

export const Last4Digits = () => {
    return <EvervaultProvider teamId={"d7664f0891ca"}>
        <Last4DigitsInput/>
    </EvervaultProvider>
}