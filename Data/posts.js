import {USERS} from './usersData';

export const POSTS = [
    {
        imageUrl:
          'https://scontent.cdninstagram.com/v/t51.29350-15/311432311_604542334748929_1208212251581318163_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ki4NnDW5KF4AX9uz1Zm&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AfCXZTcP_a-Iqzqf76tWqZoWXjyAsKM29lhbUynCEIcYXg&oe=64D4C0EB',
        user: USERS[0].user,
        likes: 543,
        caption:
          'Lost in the woods 🍂',
        profile_pic: USERS[0].image,
        comments: [
          {user: 'Donald', comment: 'ship'},
          {
            user: 'Aaron',
            comment: 'land',
          },
        ],
      },
  {
    imageUrl:
      'https://metricool.com/wp-content/uploads/HOW-TO-PUBLISH-ON-INSTAGRAM.jpg',
    user: USERS[0].user,
    likes: 328,
    caption:
      'history put biggest quarter voyage traffic swung affect the world entirely',
    profile_pic: USERS[0].image,
    comments: [
      {
        user: 'joddy',
        comment:
          'purpose brother sail memory fly none season pile feel fire baseball ',
      },
      {
        user: 'ojas',
        comment:
          'dance difficulty halfway level tiny rapidly liquid dangerous thou ',
      },
    ],
  },
  {
    imageUrl: 'https://blog.hubspot.com/hubfs/How%20To%20Post%20on%20IG.jpg',
    user: USERS[1].user,
    likes: 3234,
    caption:
      'flat group highway stems fast limited help paid wore world due colony in India test ',
    profile_pic: USERS[1].image,
    comments: [
      {
        user: 'Melvin',
        comment:
          'health sudden stems possible ride easier plate clothing deal remain ',
      },
      {
        user: 'Leo',
        comment:
          'year driven noon raw begun development account pond temperature whether ',
      },
    ],
  },
  {
    imageUrl:
      'https://img.lovepik.com/desgin_photo/45000/4889_detail.jpg!wh650',
    user: USERS[2].user,
    likes: 543,
    caption:
      'behavior on raw begun development account pond paid wore world due colony in',
    profile_pic: USERS[2].image,
    comments: [
      {user: 'Donald', comment: 'ship'},
      {
        user: 'Aaron',
        comment: 'land',
      },
    ],
},

];

export const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://icons8.com/icon/fGz6qzNIQMSc/heart',
    likedImageUrl: '',
  },
  {
    name: 'Comment',
    imageUrl: '',
  },
  {
    name: 'Share',
    imageUrl:
      'https://w7.pngwing.com/pngs/304/660/png-transparent-instagram-like-heart-love-3d-icon.png',
  },
  {
    name: 'Save',
    imageUrl: '',
  },
];

export const BottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/48/FFFFFF/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/FFFFFF/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/50/FFFFFF/search--v1.png',
    inactive: 'https://img.icons8.com/ios/50/FFFFFF/search--v1.png',
  },
  {
    name: 'Add',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/FFFFFF/plus-2-math.png',
    inactive:
      'https://img.icons8.com/material-outlined/24/FFFFFF/plus-2-math--v1.png',
  },
  {
    name: 'Reel',
    active: 'https://img.icons8.com/ios-filled/50/FFFFFF/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/50/FFFFFF/instagram-reel.png',
  },
  {
    name: 'Profile',
    active:
      'https://media.licdn.com/dms/image/C4D03AQGyCbcHqqyacg/profile-displayphoto-shrink_200_200/0/1655303376759?e=1696464000&v=beta&t=JDGTWWEGn_vxFbdq1za8h819UlZ40zLxgKk6HQ2mj7c',
    inactive:
      'https://media.licdn.com/dms/image/C4D03AQGyCbcHqqyacg/profile-displayphoto-shrink_200_200/0/1655303376759?e=1696464000&v=beta&t=JDGTWWEGn_vxFbdq1za8h819UlZ40zLxgKk6HQ2mj7c',
  },
];
