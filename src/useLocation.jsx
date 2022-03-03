import { useState } from "react";

function useLocation(defaultLat, defaultLong) {
    const [lat, setLat] = useState(defaultLat);
    const [long, setLong] = useState(defaultLong);
    return { lat, long }
}

export default useLocation;