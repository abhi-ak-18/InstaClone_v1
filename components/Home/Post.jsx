import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Divider} from 'react-native-elements';
import {Share} from 'react-native';
import {Clipboard} from 'react-native-clipboard';

export default function Post({post}) {
  return (
    <View style={styles.postContainer}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter post={post}/>
      <LikesCount post={post} />
      <Caption post={post} />
      <CommentSection post={post} />
      <Comments post={post} />
    </View>
  );
}

const PostHeader = ({post}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this post on Instagram!',
        url: post.imageUrl,
        title: 'Instagram Post',
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleCopyLink = () => {
    console.log(post.imageUrl);
    /* Clipboard.setString(post.imageUrl); */
    ToastAndroid.showWithGravityAndOffset(
      'Image URL copied!',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      100,
    );
  };

  return (
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
        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.ellipsis}>
            <Text style={styles.verticalText}>...</Text>
          </View>
        </TouchableOpacity>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {/* Center the "Options" text */}
              <View style={styles.optionsContainer}>
                <Text style={styles.modalText}>Options</Text>
                <Divider width={1} orientation="vertical" />
              </View>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleShare}>
                  <View style={styles.buttonContent}>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/material-outlined/24/FFFFFF/share.png',
                      }}
                      style={styles.buttonIcon}
                    />
                    <Text style={styles.buttonText}>Share</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={handleCopyLink}>
                  <Text style={styles.buttonText}>Copy Link</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.redButton}
                  onPress={toggleModal}>
                  <Text style={styles.redButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const PostImage = ({post}) => (
  <View style={{height: 300, width: '100%'}}>
    <Image
      source={{uri: post.imageUrl}}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const PostFooter = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

  const toggleCommentModal = () => {
    setIsCommentModalVisible(!isCommentModalVisible);
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '32%',
        }}>
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <Image
            style={styles.footerIcon}
            source={
              isLiked
                ? require('..//../assets/icons8-heart-50.png')
                : require('..//../assets/icons-heart-50.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCommentModal}>
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
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('..//../assets/icons8-save-48.png')}
          />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isCommentModalVisible}
        transparent={true}
        animationType="slide">
        <View style={styles.commentModalContainer}>
          <View style={styles.commentModalContent}>
            <Text style={styles.commentModalTitle}>Comments</Text>
            <Divider width={1} orientation="vertical" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {post.comments.map((comment, index) => (
                <View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
                  <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '900' }}>{comment.user}</Text> {comment.comment}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleCommentModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const LikesCount = ({post}) => (
  <View>
    <Text
      style={{color: 'white', marginLeft: 10, fontWeight: '600', marginTop: 3}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);
const Caption = ({post}) => (
  <View style={{marginTop: 5, flexDirection: 'row'}}>
    <Text>
      <Text
        style={{
          color: 'white',
          textTransform: 'capitalize',
          fontWeight: '900',
        }}>
        {post.user}
      </Text>
      <Text style={{color: 'white', fontWeight: '200'}}> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({post}) => {
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);

  const toggleCommentModal = () => {
    setIsCommentModalVisible(!isCommentModalVisible);
  };
  return (
    <View style={{marginTop: 5}}>
      {!!post.comments.length && (
        <TouchableOpacity onPress={toggleCommentModal}>
          <Text style={{color: 'gray'}}>
            View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
            {post.comments.length > 1 ? 'comments' : 'comment'}
          </Text>
        </TouchableOpacity>
      )}
      <Modal
        visible={isCommentModalVisible}
        transparent={true}
        animationType="slide">
        {/* Your comment modal content */}
        {/* You can display the comments here */}
        <View style={styles.commentModalContainer}>
          <View style={styles.commentModalContent}>
            <Text style={styles.commentModalTitle}>Comments</Text>
            <Divider width={1} orientation="vertical" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {post.comments.map((comment, index) => (
                <View key={index} style={{flexDirection: 'row', marginTop: 3}}>
                  <Text style={{color: 'white'}}>
                    <Text style={{fontWeight: '900'}}>{comment.user}</Text>{' '}
                    {comment.comment}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={toggleCommentModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const Comments = ({post}) => (
  <>
    {post.comments.slice(0, 2).map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 3 }}>
        <Text style={{ color: 'white' }}>
          <Text style={{ fontWeight: '900' }}>{comment.user}</Text> {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

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
    width: 28,
    height: 28,
    marginLeft: 10,
    marginTop: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 01)', // Gray with opacity
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%', // Adjust the height to 20% of the screen
    borderTopLeftRadius: 10, // Rounded top-left border
    borderTopRightRadius: 10, // Rounded top-right border
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderWidth: 0, // Remove the bottom border
    borderTopWidth: 0.2, // Keep only the top border
    borderColor: 'white',
    overflow: 'hidden', // Hide content outside the rounded borders
  },

  modalContent: {
    padding: 20,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10, // Rounded top-left border
    borderTopRightRadius: 10, // Rounded top-right border
  },
  ellipsis: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30, // Adjust height as needed
    marginLeft: 5,
    marginRight: 10,
    transform: [
      {rotate: '90deg'}, // Rotate the text vertically for Android
      {translateY: -15}, // Translate the text vertically for iOS
    ], // Rotate the text vertically
  },

  verticalText: {
    fontSize: 18, // Adjust font size as needed
    fontWeight: '900',
    color: 'white',
    textTransform: 'uppercase', // Use uppercase or lowercase as needed
  },
  closeButtonContainer: {
    alignItems: 'center',
    marginTop: 15,
  },

  closeButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  modalButton: {
    backgroundColor: '#4285F4',
    width: '30%',
    paddingVertical: 10,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: 'white',
  },
  redButton: {
    backgroundColor: '#FF5733', // Red button background color
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  redButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  commentModalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%', // Adjust the height to 40% of the screen
    backgroundColor: 'black', // Background color
    overflow: 'hidden', // Hide content outside the rounded borders
    borderTopLeftRadius: 10, // Rounded top-left border
    borderTopRightRadius: 10, // Rounded top-right border
    borderTopWidth: 0.5, // White border only at the top
    borderColor: 'white', // White color for the border
  },

  commentModalContent: {
    flex: 1,
    padding: 20,
    borderTopLeftRadius: 10, // Rounded top-left border
    borderTopRightRadius: 10, // Rounded top-right border
    backgroundColor: 'black', // Background color
    top: 0,
  },
  commentModalTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 10, // Add some spacing from the content
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start', // Align items at the top of the ScrollView
    marginBottom: 5,
    marginTop: 5,
  },
});
