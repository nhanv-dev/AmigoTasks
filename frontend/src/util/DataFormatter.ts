export default class DataFormatter {

    static formatDate(date: string) {
        return new Date(date).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        }).replace(',', '');
    };

    static formatDateToDaysAgo(isoDateString: string) {
        const now = new Date();
        const date = new Date(isoDateString);
        const diffTime = now.getTime() - date.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));

        if (diffDays === 0) {
            if (diffHours < 1) {
                const diffMinutes = Math.floor(diffTime / (1000 * 60));
                if (diffMinutes < 1) return `Now`
                return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
            } else if (diffHours === 1) {
                return "1 hour ago";
            } else {
                return `${diffHours} hours ago`;
            }
        } else if (diffDays === 1) {
            return "Yesterday";
        } else {
            return `${diffDays} days ago`;
        }
    }
}