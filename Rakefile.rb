#!/usr/bin/env ruby

# define the default task ran when executing: rake
task default: ["deploy:ghpages"]

# Github pages publishing.
namespace :deploy do
  # Usage:
  # bundle exec rake deploy:ghpages

  desc 'deploy to Github Pages'
  task :ghpages do
    `jekyll build`

    domain = 'ergodox.io'

    origin = `git config --get remote.origin.url`

    Dir.mktmpdir do |tmp|
      cp_r 'build/.', tmp
      Dir.chdir tmp

      File.open("CNAME", "w+") { |file| file.write(domain) }

      system 'git init'
      system "git add . && git commit -m 'Site updated at #{Time.now.utc}'"
      system "git remote add origin #{origin}"
      system 'git push origin master:refs/heads/gh-pages --force'
    end
  end
end