import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white/95 backdrop-blur-md border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Egbeyemi Olamilekan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
