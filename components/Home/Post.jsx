import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {postFooterIcons} from '../../Data/posts';

export default function Post({post}) {
  return (
    <View style={styles.postContainer}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <LikesCount post={post} />
      <Caption post={post}/>
      <CommentSection post={post}/>
      <Comments post={post}/>
    </View>
  );
}

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_pic}} style={styles.storyPP} />
      <Text
        style={{
          color: 'white',
          marginLeft: 5,
          fontWeight: '800',
          textTransform: 'capitalize',
        }}>
        {post.user}
      </Text>
    </View>
    <View>
      <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
    </View>
  </View>
);

const PostImage = ({post}) => (
  <View style={{height: 300, width: '100%'}}>
    <Image
      source={{uri: post.imageUrl}}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row'}}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '32%',
      }}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('..//../assets/icons-heart-50.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('..//../assets/icons8-comment-25.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('..//../assets/icons8-share-50.png')}
        />
      </TouchableOpacity>
    </View>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require('..//../assets/icons8-save-48.png')}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const LikesCount = ({post}) => (
  <View>
    <Text
      style={{color: 'white', marginLeft: 10, fontWeight: '600', marginTop: 3}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);
const Caption = ({post}) => (
    <View style={{marginTop:5, flexDirection:'row'}}>
        <Text>
            <Text style={{color:'white', textTransform:'capitalize', fontWeight:'900'}}>{post.user}</Text>
            <Text style={{color:'white', fontWeight:'200'}}>  {post.caption}</Text>
        </Text>
    </View>
);

const CommentSection = ({post}) => (
    <View style={{marginTop:5}}>
        {!!post.comments.length && (
        <Text style={{color:'gray'}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length} {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
        )}
    </View>
);

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row',marginTop:3}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight:'900'}}>{comment.user}</Text>{' '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 30,
  },
  storyPP: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.5,
    borderColor: '#BF3312',
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 5,
  },
});
