
export class QueryFormatter {

    static format(pairs: {}) {
        const queries = Object.keys(pairs).map((key) => {
            if (pairs[key]) return `${key}=${pairs[key]}`
        });
        return queries.join('&');
    }
}