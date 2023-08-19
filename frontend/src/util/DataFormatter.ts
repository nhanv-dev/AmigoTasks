export default class DataFormatter {

    static formatCreatedAt(createdAt: string) {
        return new Date(createdAt).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).replace(',', '');
    };
}