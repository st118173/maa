class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :messages, foreign_key: :sender_id
  has_many :programs
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable, :confirmable
  has_one :reg
  belongs_to :role
  has_one :userpersnaldet
  #before_save :assign_role
  before_save :assign_isactive
  before_save :assign_pid
  acts_as_commontator



  #default role is volunteer
  #def assign_role
  #  self.role = Role.find_by_name("Volunteer") if self.role.nil?
  #end

  def admin?
    self.role.name == "Admin" if !self.role.blank?
  end

  def member?
    self.role.name == "Member" if !self.role.blank?
  end

  def volunteer?
    self.role.name == "Volunteer" if !self.role.blank?
  end

   def assign_isactive
    self.is_active = 1 if self.is_active.nil?
  end

  def active_for_authentication?
     #remember to call the super
     #then put our own check to determine "active" state using
     #our own "is_active" column

    super and self.is_active?

  end
  def assign_pid
    @pid =  Userpersnaldet.new
    @pid.id = self.id
    if !Userpersnaldet.exists?(self.id)
      @pid.save
    end
  end

  def timeout_in
    if admin?
      1.year
    else
    5.minutes
    end
  end
  def update_tracked_fields!(request)
    old_signin = self.last_sign_in_at
    super
    if self.last_sign_in_at != old_signin
      # Audit.create :user => self, :action => "login", :ip => self.last_sign_in_ip
    end
  end
  # def active_for_authentication?
  #   super && approved?
  # end


end