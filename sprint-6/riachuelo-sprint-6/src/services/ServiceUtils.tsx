const ServiceUtils = {
    handleResponse<T>(prom: Promise<Response>): Promise<T> {
        return prom.then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(resp.json() + '');
            }
        })
    }
}

export default ServiceUtils;