import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink, Linkedin, Award } from 'lucide-react';

export function CompactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      content: "Excited to share that I've successfully completed the Google Arcade program 2024, reaching the Champions Milestone! Thanks to my dedicated facilitator  Sir, for their invaluable guidance, readily available assistance, and continuous support. Your mentorship has been instrumental in my success..",
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
      content: "I'm glad to share that I've officially unlocked the hashtag #ChampionMilestone with Google Cloud Arcade! After months of dedication, hands-on labs, and real-world challenges.🙏 A special shoutout to  Anshul Kotwal for his constant support and guidance throughout this journey",
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
      content: "Big thanks to Google Cloud Skills Boost for making learning fun and impactful! 🙌 A special thank you to my guide Anshul Kotwal  for his invaluable help and support throughout the event!.",
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
      content: "Hello 👋  These facilitators are rock-on 🤘🎸 and deserve a big, seperate shout-out for their constant support and clarifications throughout the program! 🚀 From July 22nd to September 22nd 2024, I actively participated in the program.",
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
      content: "🎉 Leveled Up My Cloud Skills! A massive thank you to Anshul Kotwal  for his guidance, support, and motivation throughout this journey. 🙏  🔥",
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

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openLinkedInPost = (url, e) => {
    e?.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-12 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            What People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Say
            </span>
          </h2>
          <div className="flex justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span>5.0 Rating</span>
            </div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span>1000+ Happy Students</span>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative">
          <div 
            className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            onClick={() => openLinkedInPost(currentTestimonial.linkedinUrl)}
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 left-6">
              <div className={`p-2 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} shadow-lg`}>
                <Quote className="h-4 w-4 text-white" />
              </div>
            </div>

            {/* LinkedIn Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div 
                className="p-2 rounded-full bg-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                onClick={(e) => openLinkedInPost(currentTestimonial.linkedinUrl, e)}
              >
                <Linkedin className="h-4 w-4 text-white" />
              </div>
            </div>

            <div className="pt-4">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} p-0.5`}>
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                    <span className={`text-sm font-bold bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text text-transparent`}>
                      {currentTestimonial.avatar}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-800 dark:text-white">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </p>
                </div>
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Achievement Badge */}
              <div className="mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} bg-opacity-10 border border-current border-opacity-20`}>
                  <Award className="h-3 w-3" />
                  <span className={`text-xs font-medium bg-gradient-to-r ${currentTestimonial.gradient} bg-clip-text`}>
                    {currentTestimonial.achievement}
                  </span>
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-sm md:text-base">
                "{currentTestimonial.content}"
              </blockquote>

              {/* External Link Hint */}
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="h-3 w-3" />
                <span>Click to view LinkedIn post</span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? `bg-gradient-to-r ${currentTestimonial.gradient} scale-125`
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompactTestimonials;