import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink, Linkedin, Award, Play, Pause } from 'lucide-react';

export function CompactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Upendra Chakali",
      role: "Aspiring Software Engineer",
      company: "NIPTELU",
      content: "Great Day Everyone! 😊 I'm elated to share that I've completed all the May 2025 badges in the Google Cloud Arcade Facilitator Program 🎮 🏆",
      achievement: "All May 2025 Badges",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/activity-7338253910140194816-jhbo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-blue-500 to-purple-600",
      avatar: "UC"
    },
    {
      id: 2,
      name: "Yash Chauhan",
      role: "Artist & Developer",
      company: "Creative Professional",
      content: "Excited to share that I've successfully completed the Google Arcade program 2024, reaching the Champions Milestone! Thanks to my dedicated facilitator Sir, for their invaluable guidance, readily available assistance, and continuous support. Your mentorship has been instrumental in my success.",
      achievement: "Champions Milestone 2024",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/yash-chauhan-548a31246_excited-to-share-that-ive-successfully-completed-activity-7313190177298952195-ohdH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-green-500 to-teal-600",
      avatar: "YC"
    },
    {
      id: 3,
      name: "Kunal Maurya",
      role: "Coordinator - Techtract",
      company: "Maharaja Agrasen Institute of Technology",
      content: "I'm glad to share that I've officially unlocked the #ChampionMilestone with Google Cloud Arcade! After months of dedication, hands-on labs, and real-world challenges. A special shoutout to Anshul Kotwal for his constant support and guidance throughout this journey.",
      achievement: "Champion Milestone",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/kunal-maurya-a58035304_championmilestone-googlearcade-championmilestone-activity-7312321084949684224-T0cs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-cyan-500 to-blue-600",
      avatar: "KM"
    },
    {
      id: 4,
      name: "Shreya Garg",
      role: "Engineering Student",
      company: "Ajay Kumar Garg Engineering College",
      content: "Big thanks to Google Cloud Skills Boost for making learning fun and impactful! A special thank you to my guide Anshul Kotwal for his invaluable help and support throughout the event!",
      achievement: "Champion Milestone + Swags",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/shreya-garg-a3b83b29b_googlecloud-googlearcade-cloudlearning-activity-7312159910572486656-dA22?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-pink-500 to-red-600",
      avatar: "SG"
    },
    {
      id: 5,
      name: "Sai Sukeerth Annadata",
      role: "PM Apprentice @Google",
      company: "Trust & Safety | Philomath",
      content: "Hello 👋 These facilitators are rock-on 🤘🎸 and deserve a big, separate shout-out for their constant support and clarifications throughout the program! From July 22nd to September 22nd 2024, I actively participated in the program.",
      achievement: "259 labs, 65 badges, 50 courses",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/activity-7311776263654830080-NfZU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-orange-500 to-yellow-600",
      avatar: "SA"
    },
    {
      id: 6,
      name: "Yug Bhatt",
      role: "Software Engineer",
      company: "C, C++, Java, Python Specialist",
      content: "🎉 Leveled Up My Cloud Skills! A massive thank you to Anshul Kotwal for his guidance, support, and motivation throughout this journey. 🙏 🔥",
      achievement: "Cloud Skills Mastery",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/yug-bhatt-497775256_googlecloud-cloudskills-lifelonglearner-activity-7310256454005907456-94sN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-violet-500 to-purple-600",
      avatar: "YB"
    },
    {
      id: 7,
      name: "Arjun Gupta",
      role: "Blockchain Research Lab",
      company: "Flutter Developer | BTech CSE @AKGEC",
      content: "Exciting Swags from Google Cloud Arcade! 🎉 This journey has been an incredible experience, filled with hands-on challenges and interactive labs. A huge thanks to Arcade facilitator Anshul Kotwal for his guidance and support throughout the program! 🙌🚀",
      achievement: "Premium Plus Milestone",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/arjun-gupta1711_googlecloud-gcp-googlecloudarcade-activity-7307390607281315840-743g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-emerald-500 to-green-600",
      avatar: "AG"
    },
    {
      id: 8,
      name: "Ayush Singh",
      role: "B.Tech CSE Student",
      company: "AKGEC | Innovation Enthusiast",
      content: "Best session ever Sir!! It was a great experience for us also sir!!!! 😊 Amazing mentorship and guidance throughout the OSS Workshop.",
      achievement: "Successful Learning Journey",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7327671972354543616?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7327671972354543616%2C7328204618834829312%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287328204618834829312%2Curn%3Ali%3AugcPost%3A7327671972354543616%29",
      gradient: "from-indigo-500 to-blue-600",
      avatar: "AS"
    },
    {
      id: 9,
      name: "Akash Tyagi",
      role: "Full Stack Developer | React.js | Node.js",
      company: "C++ DSA | LeetCode Expert",
      content: "I had an amazing experience participating in the Google Cloud Skills Boost—a fun, interactive, and gamified way to explore the world of cloud computing!",
      achievement: "Skills Boost Program",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/akashtyagicsit_google-googlecloud-arcadeswags-ugcPost-7325951253434241024-TLg9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-cyan-500 via-blue-500 to-indigo-600",
      avatar: "AT"
    },
    {
      id: 10,
      name: "Priyank Singh",
      role: "AJAY KUMAR GARG ENGINEERING COLLEGE",
      company: "AKGEC'26",
      content: "I had an amazing experience diving into the Google Cloud Arcade Facilitator Program—a gamified, hands-on journey into the world of cloud computing!",
      achievement: "Arcade Facilitator Program",
      rating: 5,
      linkedinUrl: "https://www.linkedin.com/posts/priyank-singh-26bb9b275_google-googlecloud-arcadeswags-ugcPost-7325417904236023808-A4mu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD2qPnUBovNe5P8IEfFbrbFXCgKQ1WpBuNA",
      gradient: "from-emerald-500 via-green-500 to-teal-600",
      avatar: "PS"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 150);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const changeSlide = (newIndex) => {
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const openLinkedInPost = (url, e) => {
    e?.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
              Students Say
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
            Real testimonials from our Google Cloud Arcade participants who achieved remarkable milestones & from OSS technical Workshop coordinated by me
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="font-medium">5.0 Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="font-medium">1000+ Happy Students</span>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200/60 dark:border-gray-700/60 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isTransitioning ? 'opacity-75 scale-[0.98]' : 'opacity-100 scale-100'}`}
            onClick={() => openLinkedInPost(currentTestimonial.linkedinUrl)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-3 sm:-top-4 left-4 sm:left-6">
              <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} shadow-lg`}>
                <Quote className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div 
                className="p-2 rounded-full bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                onClick={(e) => openLinkedInPost(currentTestimonial.linkedinUrl, e)}
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
            </div>

            <div className="pt-4 sm:pt-6">
              {/* User Info */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} p-0.5 flex-shrink-0`}>
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                      <span className={`text-sm sm:text-base lg:text-lg font-bold bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                        {currentTestimonial.avatar}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white truncate">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 truncate">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex gap-1 sm:ml-auto">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mb-4 sm:mb-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text `}>
                    {currentTestimonial.achievement}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl text-gray-300 dark:text-gray-600 leading-none font-serif mr-1">"</span>
                {currentTestimonial.content}
                <span className="text-4xl sm:text-5xl text-gray-300 dark:text-gray-600 leading-none font-serif ml-1">"</span>
              </blockquote>

              {/* External Link Hint */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Click to view original LinkedIn post</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-8 p-3 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-blue-500 focus:outline-none z-10 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-8 p-3 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-blue-500 focus:outline-none z-10 items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-between items-center mt-6 px-4">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isAutoPlaying ? (
                <Pause className="h-3 w-3 text-gray-700 dark:text-gray-300" />
              ) : (
                <Play className="h-3 w-3 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
          
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeSlide(idx)}
              className={`transition-all duration-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                idx === currentIndex
                  ? `w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r ${currentTestimonial.gradient}`
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Controls (Desktop) */}
        <div className="hidden sm:flex justify-center mt-6">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 dark:text-gray-300"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-3 w-3" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CompactTestimonials;