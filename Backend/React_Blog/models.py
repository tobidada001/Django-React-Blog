from django.db import models
from django.contrib.auth.models import User
import datetime
from django.urls import reverse
from ckeditor_uploader.fields import RichTextUploadingField
from taggit.managers import TaggableManager
# Create your models here.


class Categories(models.Model):
    category = models.CharField(max_length=50)

    @property
    def posts(self):
        return self.categories.all().values('id', 'post_title', 'slug')
    
    @property
    def category_post_count(self):
        return self.categories.all().count()
 
    def __str__(self):
        return self.category


class PublishedPostManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status = True)

class Post(models.Model):
    
    post_title = models.CharField(max_length=100)
    post_body = RichTextUploadingField()
    cover = models.ImageField(upload_to='images', blank=True)
    category = models.ForeignKey(Categories, related_name='categories', on_delete=models.CASCADE)
    author = models.ForeignKey(User,related_name= "author", null=True, blank=True, on_delete=models.CASCADE)
    post_date = models.DateTimeField(auto_now_add=True)
    slug = models.SlugField(null = True, blank = True, unique = True)
    status = models.BooleanField('Tick to publish post.', default = True)
    published = PublishedPostManager()
    objects = models.Manager()
    tagsagain = TaggableManager()

    class Meta:
        verbose_name = ("Post")
        verbose_name_plural = ("Posts")
        ordering = ('-post_date',)

    @property
    def total_comments(self):
        return self.comments.all().count()

    def __str__(self):
        return self.post_title
    
    def natural_key(self):
        return (self.author.username)
    

class Comments(models.Model):
    name = models.CharField(max_length=70)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    comment = models.CharField(max_length=3000)
    post = models.ForeignKey(Post, related_name= "comments", on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)
    approval_status= models.BooleanField(default= False)
    
    def get_queryset(self):
        queryset = super(Comments, self).get_queryset().filter(approval_status = True)
        return queryset
    
    @property
    def total_replies(self):
        return self.replies.all().count()
    
    @property
    def replies(self):
        return self.replies.all().values()

    def __str__(self):
        return self.comment

    class Meta:
        ordering = ('-date_added',)


class Replies(models.Model):
    name = models.CharField(max_length=70)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    website = models.URLField(max_length=200)
    reply = models.CharField(max_length=3000)
    main_comment = models.ForeignKey(Comments, related_name= "replies", on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "Replied to: " + str(self.main_comment)


class Contact(models.Model):

    contact_name = models.CharField('Name', max_length=100)
    contact_email = models.EmailField("Email Address", max_length=254)
    subject = models.CharField('Subject', max_length=80)
    message = models.CharField('Your Message' , max_length=2000)

    def __str__(self):
        return self.contact_name + ' :: ' + self.subject
