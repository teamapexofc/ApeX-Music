
# Contributing to ApeX Music Bot

Thank you for your interest in contributing to ApeX! This is the open-source version of Encore, created by Alive to help the developer community learn and grow.

## 🌟 Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- 🔧 Fix issues
- ✨ Add new commands or features

## 📋 Getting Started

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/ApeX-Music.git
   cd ApeX-Music
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔧 Development Guidelines

### Code Style
- Use meaningful variable and function names
- Follow existing code patterns
- Add comments for complex logic
- Use ES6+ features where appropriate

### Command Structure
All commands should follow this structure:
```javascript
const baseCmd = require('../../assets/baseCmd');

module.exports = class YourCommand extends baseCmd {
    constructor(client) {
        super(client, {
            name: "command-name",
            aliases: ["alias1", "alias2"],
            category: "category",
            description: "Command description",
            usage: "command-name [args]",
            userPerms: [],
            botPerms: ["SendMessages"],
            cooldown: 3,
            inVc: false,
            sameVc: false,
            player: false,
            currentTrack: false
        });
    }
    
    async run(message, args, prefix) {
        // Command logic here
    }
}
```

### Testing
- Test your changes thoroughly
- Check for errors in console
- Test with different scenarios
- Verify bot permissions work correctly

## 📝 Pull Request Process

1. **Update Documentation**
   - Update README.md if needed
   - Add JSDoc comments to functions
   - Update command list if adding new commands

2. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: add awesome feature"
   ```
   
   Use conventional commits:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Tests
   - `chore:` Maintenance

3. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes clearly
   - Link any related issues

## 🐛 Reporting Bugs

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Error messages/logs
- Your environment (Node.js version, OS, etc.)

## 💡 Feature Requests

For feature requests:
- Explain the feature clearly
- Describe use cases
- Explain why it would be useful
- Consider if it fits the project scope

## 🎨 Design Principles

- **Simplicity**: Keep code clean and maintainable
- **Performance**: Optimize for speed and efficiency
- **User Experience**: Make commands intuitive
- **Modularity**: Keep components independent
- **Documentation**: Code should be self-documenting

## 🆘 Getting Help

- Join our [Support Server](https://discord.gg/6QwS5BQx)
- Check existing issues and discussions
- Read the documentation thoroughly
- Ask questions in Discord

## 📜 Code of Conduct

- Be respectful and inclusive
- Help others learn
- Give constructive feedback
- Be patient with newcomers
- Follow GitHub's Community Guidelines

## 🎯 Priority Areas

We especially welcome contributions in:
- Bug fixes
- Performance improvements
- Documentation improvements
- New music filters
- UI/UX enhancements
- Code optimization

## 🙏 Recognition

All contributors will be:
- Listed in the README
- Credited in release notes
- Part of the ApeX community

## 📞 Contact

- **Support Server**: https://discord.gg/6QwS5BQx
- **Emoji Server**: https://discord.gg/eSucYuzF
- **GitHub Issues**: https://github.com/teamapexofc/ApeX-Music/issues

---

**Note**: ApeX is the educational open-source version. For production use, consider [Encore](https://encorebot.me) - the main bot with 24/7 uptime and premium features.

Made with 💘 by Alive & the ApeX Community
