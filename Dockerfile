FROM ruby:2.2.3

# Install essential Linux packages
RUN apt-get update -qq && apt-get install 

# Define where our application will live inside the image
ENV ROOT_PROJECT /var/www/terremoto-cdmx

# Create application home. App server will need the pids dir so just create everything in one shot


# Set our working directory inside the image
WORKDIR $ROOT_PROJECT

# Use the Gemfiles as Docker cache markers. Always bundle before copying app src.
# (the src likely changed and we don't want to invalidate Docker's cache too early)
# http://ilikestuffblog.com/2014/01/06/how-to-skip-bundle-install-when-deploying-a-rails-app-to-docker/
COPY Gemfile Gemfile

COPY Gemfile.lock Gemfile.lock

# Prevent bundler warnings; ensure that the bundler version executed is >= that which created Gemfile.lock
RUN gem install bundler

# Finish establishing our Ruby enviornment
RUN bundle install

# Copy the Rails application into place
COPY . .

CMD jekyll serve
