from rest_framework import serializers
from .models import Post, Categories, Comments, Replies
from taggit.models import Tag
from django.contrib.auth.models import User
from taggit_serializer.serializers import TagListSerializerField, TaggitSerializer

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ArchivesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'post_date']

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'category', 'posts', 'category_post_count']


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class RepliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Replies
        fields = '__all__'


class CommentsSerializer(serializers.ModelSerializer):
    replies = RepliesSerializer(many = True, read_only = True)
    
    class Meta:
        model = Comments
        fields = ['id','name', 'post', 'email', 'comment', 'date_added', 'replies']


class PostListSerializer(serializers.ModelSerializer):

    category = CategoriesSerializer(read_only = True)
    author = UsersSerializer(read_only = True)
    post_body = serializers.SerializerMethodField()

    def get_post_body(self, obj):
        return obj.post_body[:300]

    class Meta:
        model = Post
        fields = ['id', 'post_title', 'post_body', 'author', 'post_date', 'category', 'slug']
     

class PostDetailSerializer(TaggitSerializer, serializers.ModelSerializer):

    category = CategoriesSerializer(read_only = True)
    author = UsersSerializer(read_only = True)
    comments = CommentsSerializer(many= True, read_only=True)
    tagsagain = TagListSerializerField(read_only = True)
    nextarticle = serializers.SerializerMethodField(read_only = True)
    previousarticle = serializers.SerializerMethodField(read_only = True)
    total = serializers.SerializerMethodField(read_only = True)

    def get_nextarticle(self, obj):
        post = Post.objects.filter(post_date__gt = obj.post_date)
        if post:
            return post.values('id', 'post_title', 'slug').first()
        return None

    def get_previousarticle(self, obj):
        post = Post.objects.filter(post_date__lt = obj.post_date)
        if post:
            return post.values('id', 'post_title', 'slug').first()
        return None

    def get_total(self, obj):
        comments = obj.comments.all().count()
        return comments

    class Meta:
        model = Post
        fields = ['id', 'post_title', 'slug', 'post_body', 'cover', 'category', 
        'author', 'post_date', 'comments', 'tagsagain', 'nextarticle', 'previousarticle', 'total']


