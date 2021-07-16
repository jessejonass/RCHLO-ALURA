import { useState } from 'react';

function useLoading(): [() => void, () => void, () => boolean] {

    const [liveRequests, setLiveRequests] = useState(0);

    function addRequest(): void {
        setLiveRequests(liveRequests => {
            // console.log(`addRequest ${liveRequests}`);
            return liveRequests + 1;
        });
    }

    function removeRequest(): void {
        setLiveRequests(liveRequests => {
            // console.log(`removeRequest ${liveRequests}`);
            return liveRequests - 1;
        });
    }

    function isLoading(): boolean {
        // console.log(`isLoading ${liveRequests}`);
        return liveRequests > 0;
    }

    return [addRequest, removeRequest, isLoading];
}

export default useLoading;