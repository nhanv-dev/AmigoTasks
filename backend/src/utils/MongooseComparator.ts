

class MongooseComparator {

    compareObjectById(object: any, another: any) {
        return object._id.toString() === another._id.toString();
    }
}


const mongooseComparator = new MongooseComparator();

export default mongooseComparator;