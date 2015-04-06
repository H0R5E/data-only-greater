module Jekyll
  class TagCloudTag < Liquid::Tag
    safe = true
    
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      html = "<div class='tag-menu'>\n  <ul>\n"
      tags = context.registers[:site].tags
      avg = tags.inject(0.0) {|memo, tag| memo += tag[1].length} / tags.length
      weights = Hash.new
      tags.each {|tag| weights[tag[0]] = tag[1].length/avg}
      tags.each do |tag, posts|
        downtag = "#{tag}".downcase.gsub!(' ','-')
        html << " <li><a href='tag/#{downtag}/'><span class='tag-wrapper' style='font-size: #{sprintf("%d", weights[tag] * 100)}%'>#{tag}</span></a></li>\n"
      end
      html << "  </ul>\n</div>\n"
      html
    end
  end
end

Liquid::Template.register_tag('tag_cloud', Jekyll::TagCloudTag)

