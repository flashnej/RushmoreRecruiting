require 'test_helper'

class NewResumeMailerTest < ActionMailer::TestCase
  def new_resume(candidate)
    mail(to: "flashnej@gmail.com", subject: "test")
  end
end
