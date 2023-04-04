# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
class BlogPostsController < ApplicationController ## class function
  def index ## index function
    # ---2)
    @posts = BlogPost.all ###look for all the blog post and store it in @posts
  end

  # ---3)
  def show ## show function
    @post = BlogPost.find(params[:id]) ### find post as per provided id and store it in @post
  end

  # ---4)
  def new ## new function
    @post = BlogPost.new ## initialize a new blog post and store it in @post
  end

  def create ### defining create function 
    # ---5)
    @post = BlogPost.create(blog_post_params) ### create a new blog post as per params and store it in @post
    if @post.valid? ### check if blog post is valid
      redirect_to blog_post_path(@post) ### redirect to show page of that blog post 
    end
  end

  def edit ### defining edit function
    # ---6)
    @post = BlogPost.find(params[:id]) ### Find blog post as per provided id and store it in @post
  end

  def update ### defining update function
    @post = BlogPost.find(params[:id])  ### Find blog post as per provided id and store it in
    # ---7)
    @post.update(blog_post_params) ### update the blog post as per params
    if @post.valid? ### check if blog post is valid
      redirect_to blog_post_path(@post) ### redirect to show page of that blog post
    end
  end

  def destroy ### defining destroy function 
    @post = BlogPost.find(params[:id]) ### find blog post as per provided id and store it in @post
    if @post.destroy ### destroy the blog post 
      # ---8)
      redirect_to blog_posts_path ## redirect to index page
    end
  end

  # ---9)
  private ### start the private block
  def blog_post_params ### defining blog_post_params function
    # ---10)
    params.require(:blog_post).permit(:title, :content) ### permit the title and content params 
  end
end
