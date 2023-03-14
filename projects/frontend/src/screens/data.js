// import bcrypt from 'bcryptjs';
const data = {
    /*Users: [{
            name: 'user_1',
            email: 'user_1@gmail.com',
            password: bcrypt.hashSync('1234'),
            isAdmin: true
        },
        {
            name: 'user_2',
            email: 'user_2@gmail.com',
            password: bcrypt.hashSync('12345'),
            isAdmin: false
        }
    ],*/
    Products: [{
            // _id: '1',
            name: 'T-shirt-1',
            slug: 't-shirt_1',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/man-with-sunglasses-wearing-white-t-shirt-posing_158538-16721.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 120,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 0,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '2',
            name: 'T-shirt-2',
            slug: 't-shirt_2',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/man-with-sunglasses-wearing-white-t-shirt-posing_158538-16702.jpg?t=st=1657297263~exp=1657297863~hmac=915e9ea306c4fa4fa8bcba9fb8b19c83a49ef526d4f0855d9b3c5dfdab957ef3&w=900',
            price: 120,
            countInStock: -3,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '3',
            name: 'T-shirt-3',
            slug: 't-shirt_3',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing-round-sunglasses_158538-5346.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 120,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.0,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '4',
            name: 'T-shirt-4',
            slug: 't-shirt_4',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/man-with-sunglasses-wearing-white-t-shirt-posing_158538-16723.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 720,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '5',
            name: 'T-shirt-5',
            slug: 't-shirt_5',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4976.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 720,
            countInStock: 0,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '6',
            name: 'T-shirt-6',
            slug: 't-shirt_6',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-shirt-clothes-fashion-stylish-man-posing_158538-5315.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 720,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '7',
            name: 'T-shirt-7',
            slug: 't-shirt_7',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5030.jpg?size=626&ext=jpg&uid=R52966343&ga=GA1.2.2080709370.1632748703',
            price: 7,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        },
        {
            // _id: '8',
            name: 'T-shirt-8',
            slug: 't-shirt_8',
            category: 'Shirts',
            image: 'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4909.jpg?t=st=1657296229~exp=1657296829~hmac=6ba8fc728f4953cf7ad4e5a9a51536accc988a681ace8c9062402600b8d14510&w=900',
            price: 88,
            countInStock: 10,
            brand: 'H&M',
            rating: 4.5,
            numReviews: 10,
            description: 'high qulity t-shirt'
        }
    ]
};
export default data;